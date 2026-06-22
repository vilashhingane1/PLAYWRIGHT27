Feature: API Testing


    @method1
    Scenario: perform Delete operation
        Given I send a delete request
        Then The response status code of delete should be 204

    @method1
    Scenario: perform Get operation
        Given I send a get request
        Then The response status code of get should be 200

    @method1
    Scenario: perform Post operation
        Given I send a post request with body
            """"
            {
                "name": "Ashok",
                "job": "Senior Test Engineer"
            }
            """"
        Then The response status code of post should be 201



    @method1
    Scenario: perform Put operation
        Given I send a put request with body
            """"
            {
                "name": "Ashok",
                "job": "Technical Engineer"
            }
            """"
        Then The response status code of put should be 200


        @method1
    Scenario: perform Patch operation
        Given I send a patch request with body
            """"
            {
                "name": "Ashok",
                "job": "QA Engineer"
            }
            """"
        Then The response status code of patch should be 200


   @method
    Scenario: perform Delete operation
    Given I send a delete request
    Then The response status code of delete should be 204