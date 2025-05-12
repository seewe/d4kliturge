#' The application server-side
#'
#' @param input,output,session Internal parameters for {shiny}.
#'     DO NOT REMOVE.
#' @import shiny
#' @import htmltools
#' @import jinjar
#' @noRd
app_server <- function(input, output, session) {
  # Your application server logic

  # router
  shiny.router::router_server("/")

  #-----------------------------------------------------------------------------------------
  # Data definition
  #-----------------------------------------------------------------------------------------

  # Set chant number parameters
  rv <- shiny::reactiveValues(
    ch_selected = "001"
  )

  # chant number reactive data
  number_chant <- config::get("number_chant")

  # List of chant
  list_of_chants <- setNames(
    lapply(1:number_chant, function(i) {
      chant_name <- paste0("ch_", stringr::str_pad(i, 3, pad = "0"))
      get(chant_name, envir = .GlobalEnv) # or parent.frame() if inside a module
    }),
    nm = stringr::str_pad(1:number_chant, 3, pad = "0")
  )

  # Pre-render all chant HTML
  chant_html <- lapply(names(list_of_chants), function(id) {
    render_jinja_template(
      "pageChant.html",
      data = list(
        titre = as.character(list_of_chants[[id]]$titre),
        contenu = as.character(list_of_chants[[id]]$contenu),
        categorie = toupper(as.character(list_of_chants[[id]]$categorie)),
        ch_prev = ifelse(
          id == "001",
          "001",
          sprintf("%03d", as.integer(id) - 1)
        ),
        ch_next = sprintf(
          "%03d",
          min(as.integer(id) + 1, max(as.integer(names(list_of_chants))))
        ),
        ch_prev_label = ifelse(
          id == "001",
          "001",
          sprintf("%03d", as.integer(id) - 1)
        ),
        ch_next_label = sprintf(
          "%03d",
          min(as.integer(id) + 1, max(as.integer(names(list_of_chants))))
        ),
        cover_img = sample(c(161, 172, 174, 184, 187), size = 1),
        search_chant_title = search_chant_title
      )
    )
  })
  names(chant_html) <- names(list_of_chants)

  # change chant values
  shiny::observeEvent(input$chant_clicked, {
    req(input$chant_clicked)

    if (stringr::str_detect(input$chant_clicked, "ch_")) {
      ch_selected_number <- as.numeric(
        stringr::str_remove(input$chant_clicked, "ch_")
      )
      rv$ch_selected <- stringr::str_pad(ch_selected_number, 3, pad = "0")
    } else {
      rv$ch_selected <- stringr::str_pad(input$chant_clicked, 3, pad = "0")
    }
  })
  #-----------------------------------------------------------------------------------------
  # Pages definition
  #-----------------------------------------------------------------------------------------

  # Home page
  shiny::callModule(
    mod_home_server,
    "home_1"
  )

  # Table matiere page
  shiny::callModule(
    mod_tablematiere_server,
    "tablematiere_1"
  )

  # Chant sample page
  shiny::callModule(
    mod_chants_server,
    "chants_1",
    chant_html,
    RV = shiny::reactive(rv)
  )

  # preface page
  shiny::callModule(
    mod_preface_server,
    "preface_1"
  )

  # annee Liturgique page
  shiny::callModule(
    mod_anneeLiturgique_server,
    "anneeLiturgique_1"
  )

  # politique confidentialité page
  shiny::callModule(
    mod_politique_server,
    "politique_1"
  )
}
