import React from "react";
import renderer, { act } from "react-test-renderer";
import Panel from "../../../components/tabs/Panel";
import Tabs from "../../../components/tabs/Tabs";
import { shallow, mount } from "enzyme";

describe("Tabs tests", () => {
  const testTitle = "test title";
  const testChildren = "test children";
  describe("snapshot tests", () => {
    test("should render component", () => {
      // Given
      const component = renderer.create(
        <Tabs selected={0}>
          <Panel title={testTitle}>{testChildren}</Panel>
          <Panel title={testTitle}>{testChildren}</Panel>
        </Tabs>
      );
      // When
      const tree = component.toJSON();
      // Then
      expect(tree).toMatchSnapshot();
    });
  });
});
