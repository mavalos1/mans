import { mount } from "cypress/react";

import { MansButton } from ".";

describe("Button", () => {
  it("should render text content", () => {
    mount(<MansButton>Button</MansButton>);
    cy.findByRole("button").should("have.text", "Button");

    mount(<MansButton>{null}</MansButton>);
    cy.findByRole("button").should("have.text", "");
  });

  it("should be able to spread HTML-based props", () => {
    mount(
      <MansButton
        data-testid="basic-button"
        id="apr-button"
        dir="rtl"
        lang="en"
      >
        Button
      </MansButton>
    );

    cy.findByTestId("basic-button")
      .should("have.attr", "id", "apr-button")
      .should("have.attr", "dir", "rtl")
      .should("have.attr", "lang", "en");
  });

  it("should be able to extend design via className", () => {
    mount(
      <MansButton data-testid="basic-button" className="ml-2">
        Button
      </MansButton>
    );
    cy.findByTestId("basic-button").should("have.class", "ml-2");

    mount(
      <MansButton data-testid="basic-button" className="text-xl">
        Button
      </MansButton>
    );
    cy.findByTestId("basic-button")
      .should("have.class", "text-xl")
      .should("not.have.class", "text-sm");
  });

  it("should be focusable & tabbable", () => {
    mount(<MansButton data-testid="basic-button">Button</MansButton>);

    cy.bodyFocus();
    cy.realPress("Tab");
    cy.findByTestId("basic-button")
      .should("be.visible")
      .should("be.focused")
      .should("have.text", "Button")
      .should("have.css", "box-shadow");
  });

  it("should call onClick method when the button is clicked", () => {
    const handleClick = cy.stub();
    mount(<MansButton onClick={handleClick}>Button</MansButton>);
    cy.findByRole("button")
      .realClick()
      .then(() => expect(handleClick).to.have.been.calledOnce);
  });

  it("should disable the button when disabled prop is provided", () => {
    const handleClick = cy.stub();
    mount(
      <MansButton disabled onClick={handleClick}>
        Button
      </MansButton>
    );
    cy.findByRole("button")
      .should("be.disabled")
      .realClick()
      .then(() => expect(handleClick).not.to.have.been.called);
  });

  context("visual snapshot", () => {
    it("variants & sizes", () => {
      mount(
        <div className="space-y-4">
          <MansButton>Button</MansButton>
        </div>
      );

      cy.percySnapshot("Components/Button");
    });
  });

  context("accessibility checks", () => {
    /** Currently out of scope. */
  });
});
