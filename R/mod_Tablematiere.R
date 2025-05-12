#' Tablematiere UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd
#'
#' @importFrom shiny NS tagList
mod_tablematiere_ui <- function(id) {
  ns <- shiny::NS(id)
  shiny::uiOutput(ns("html_content"))
}

#' Tablematiere Server Functions
#'
#' @noRd
mod_tablematiere_server <- function(input, output, session) {
  ns <- session$ns
  output$html_content <- shiny::renderUI({
    html_content <- render_jinja_template(
      "pageTableMatiere.html",
      data = list(
        chants_tabmat_data = chants_tabmat_data,
        search_chant_title = search_chant_title
      )
    )

    HTML(html_content)
  })
}

## To be copied in the UI
# callModule(mod_tablematiere_ui, "tablematiere_1")

## To be copied in the server
# callModule(mod_tablematiere_server, "tablematiere_1")
