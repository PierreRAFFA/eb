Feature: Get the suggestions based on color from a product

  @api
  Scenario: A product with same color should be part of the suggestion
    Given a product is already inserted with id: "p1" and lab: 92 0 0
    And a product is already inserted with id: "p2" and lab: 92 0 0
    When I call GET /products/p1/suggestions-color
    Then it should return the status code 200
    Then it should return 1 products

  @api
  Scenario: A product with close color should be part of the suggestion
    Given a product is already inserted with id: "p1" and lab: 92 0 0
    And a product is already inserted with id: "p2" and lab: 91 0 0
    When I call GET /products/p1/suggestions-color
    Then it should return the status code 200
    Then it should return 1 products

  @api @negative
  Scenario: A product with completely different color should NOT be part of the suggestion
    Given a product is already inserted with id: "p1" and lab: 92 0 0
    And a product is already inserted with id: "p2" and lab: 0 0 0
    When I call GET /products/p1/suggestions-color
    Then it should return the status code 200
    Then it should return 0 products

  @api @negative
  Scenario: A product with no color should NOT be part of the suggestion
    Given a product is already inserted with id: "p1" and lab: 92 0 0
    And a product is already inserted with id: "p2"
    When I call GET /products/p1/suggestions-color
    Then it should return the status code 200
    Then it should return 0 products

  @api @negative
  Scenario: The origin product with no color should return no suggestion
    Given a product is already inserted with id: "p1"
    And a product is already inserted with id: "p2" and lab: 92 0 0
    When I call GET /products/p1/suggestions-color
    Then it should return the status code 200
    Then it should return 0 products

  @api @negative
  Scenario: The origin product does not exist
    Given a product is already inserted with id: "p1"
    And a product is already inserted with id: "p2" and lab: 92 0 0
    When I call GET /products/p10000/suggestions-color
    Then it should return the status code 404
