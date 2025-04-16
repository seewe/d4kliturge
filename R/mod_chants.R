#' chants UI Function
#'
#' @description A shiny Module.
#'
#' @param id,input,output,session Internal parameters for {shiny}.
#'
#' @noRd 
#'
#' @importFrom shiny NS tagList 
mod_chants_ui <- function(id) {
  ns <- NS(id)
  tagList(
 
  )
}
    
#' chants Server Functions
#'
#' @noRd 
mod_chants_server <- function(id){
  moduleServer(id, function(input, output, session){
    ns <- session$ns
 
  })
}
    
## To be copied in the UI
# mod_chants_ui("chants_1")
    
## To be copied in the server
# mod_chants_server("chants_1")
