#' home UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd
#'
#' @importFrom shiny NS tagList

mod_home_ui <- function(id) {
  ns <- shiny::NS(id)
  shiny::uiOutput(ns("html_content"))
}

#' home Server Functions
#'
#' @noRd
mod_home_server <- function(input, output, session) {
  ns <- session$ns

  output$html_content <- shiny::renderUI({
    html_content <- render_jinja_template(
      "pageHome.html",
      data = list(search_chant_title = search_chant_title)
    )

    HTML(html_content)
  })
}

## To be copied in the UI
# callModule(mod_home_ui, "home_1")

## To be copied in the server
# callModule(mod_home_server, "home_1")
