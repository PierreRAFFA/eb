Feature: Import products from CSV

  @import
  Scenario: I want to import all products from a CSV
    When I execute the command to import a csv containing 10 rows
    Then the product collection should contain 10 products

  @import
  Scenario: I want to import all products from a CSV
    Given I have already imported 10 products
    When I execute the command to import a csv containing 10 rows
    Then the product collection should contain 10 products
