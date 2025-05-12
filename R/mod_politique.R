#' politique UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd
#'
#' @importFrom shiny NS tagList
mod_politique_ui <- function(id) {
  ns <- shiny::NS(id)
  shiny::uiOutput(ns("html_content"))
}

#' politique Server Functions
#'
#' @noRd
mod_politique_server <- function(input, output, session) {
  ns <- session$ns
  output$html_content <- shiny::renderUI({
    html_content <- render_jinja_template(
      "pagePolitiqueConf.html",
      data = list(
        page_title = "CONFIDENTIALITÉ",
        contenu = as.character(polCof$contenu),
        search_chant_title = search_chant_title
      )
    )
    HTML(html_content)
  })
}

## To be copied in the UI
# mod_politique_ui("politique_1")

## To be copied in the server
# mod_politique_server("politique_1")
