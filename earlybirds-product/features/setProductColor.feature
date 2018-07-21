Feature: Get the dominant color of all products

  @color
  Scenario: I want to get the dominant color of all my products
    Given I have 10 products already inserted
    When I execute the command to get the dominant color for each product
    Then it should populate the color for 10 products
