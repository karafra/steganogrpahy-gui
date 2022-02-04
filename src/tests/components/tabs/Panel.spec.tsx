import React from 'react';
import renderer from "react-test-renderer";
import Panel from "../../../components/tabs/Panel";

describe('Panel tests', () => {
  
  const testTitle = "Test title"; 
  const testChild = "Test child"
  beforeEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  test('should load component', () => {
    // Given
    const component = renderer.create(
    <Panel title={testTitle}>
        {testChild}
    </Panel>  
    );
    // When
    const tree = component.toJSON()
    // Then
    expect(tree).toMatchSnapshot();
  });
});
