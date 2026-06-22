Feature: parallel Testing

  @method1
  Scenario: verfiy playwright execution in chrome 
  Given I launch the browser
  Then I launch the test auomation practice application
  And  I verify playwright Methods part5
  And I close the browser

 
    @method1
  Scenario: verfiy playwright execution in firefox 
  Given I launch the firefox browser
  Then I launch the test auomation practice application
  And  I verify playwright Methods part5
  And I close the browser

    @method1
  Scenario: verfiy playwright execution in webkit 
  Given I launch the webkit browser
  Then I launch the test auomation practice application
  And  I verify playwright Methods part5
  And I close the browser

    @method1
  Scenario: verfiy playwright execution in headless mode
  Given I launch the headless browser
  Then I launch the test auomation practice application
  And  I verify playwright Methods part5
  And I close the browser

   