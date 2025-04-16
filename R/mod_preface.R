#' preface UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd 
#'
#' @importFrom shiny NS tagList 
mod_preface_ui <- function(id) {
  ns <- NS(id)
  tagList(
 
  )
}
    
#' preface Server Functions
#'
#' @noRd 
mod_preface_server <- function(id){
  moduleServer(id, function(input, output, session){
    ns <- session$ns
 
  })
}
    
## To be copied in the UI
# mod_preface_ui("preface_1")
    
## To be copied in the server
# mod_preface_server("preface_1")
