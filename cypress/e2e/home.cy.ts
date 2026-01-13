describe("home page", () => {
  beforeEach(() => {
    cy.visit("https://docker-test-production.up.railway.app/")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

context("Courses section", () => {
  it("Course: Testing Your First Next.js Application", () => {
   cy.getByData("course-0").find("a").contains("Get started").click()
   cy.url().should(
     "eq",
     "https://docker-test-production.up.railway.app/testing-your-first-application"
   )    
    cy.location("pathname").should("equal", "/testing-your-first-application")
  
  })


  it("Course: Testing Foundations", () => {
   cy.getByData("course-1").find("a").contains("Get started").click()
   cy.url().should(
     "eq",
     "https://docker-test-production.up.railway.app/testing-foundations"
   )    
    cy.location("pathname").should("equal", "/testing-foundations")
  
  })


  it("Course: Testing Foundations", () => {
   cy.getByData("course-1").find("a").contains("Get started").click()
   cy.url().should(
     "eq",
     "https://doker-test-production.up.railway.app/"
   )    
    cy.location("pathname").should("equal", "/testing-foundations")
  
  })

   it("Course: What You Will Learn", () => {
   cy.getByData("course-2").find("a").contains("Get started").click()
   cy.url().should(
     "eq",
     "https://docker-test-production.up.railway.app/cypress-fundamentals"
   )    
    cy.location("pathname").should("equal", "/cypress-fundamentals")
  
  })
})

})


