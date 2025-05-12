#' anneeLiturgique UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd
#'
#' @importFrom shiny NS tagList
mod_anneeLiturgique_ui <- function(id) {
  ns <- shiny::NS(id)
  shiny::uiOutput(ns("html_content"))
}

#' anneeLiturgique Server Functions
#'
#' @noRd
mod_anneeLiturgique_server <- function(input, output, session) {
  ns <- session$ns

  output$html_content <- shiny::renderUI({
    html_content <- render_jinja_template(
      "pageAnneeLith.html",
      data = list(
        page_title = "ANNÉE LITURGIQUE",
        an_liturge = an_liturge,
        search_chant_title = search_chant_title
      )
    )

    HTML(html_content)
  })
}

## To be copied in the UI
# mod_anneeLiturgique_ui("anneeLiturgique_1")

## To be copied in the server
# mod_anneeLiturgique_server("anneeLiturgique_1")
