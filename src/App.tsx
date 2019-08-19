import { OtsimoJsonSchemaForm } from "otsimo-form";
import * as React from "react";

const data = {
  simple: require("./examples/simple.json"),
  nested: require("./examples/nested.json"),
  arrays: require("./examples/arrays.json"),
  numbers: require("./examples/numbers.json"),
  widgets: require("./examples/widgets.json"),
  ordering: require("./examples/ordering.json"),
  references: require("./examples/references.json"),
  errors: require("./examples/errors.json")
};
class App extends React.Component {
  public state = {
    active: "simple"
  };
  public onChange = (obj: any) => {
    // tslint:disable-next-line:no-console
    console.log(obj);
  };
  public render() {
    return (
      <div className="App">
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={{ maxWidth: 1000, width: "100%" }}>
            <h1>Otsimo Json Schema Form</h1>
            {/*     <OtsimoForm 
              schema={require("./ExerciseFormSchema.json")}
              onChange={this.onChange}
            /> */}
            {Object.keys(data).map(k => (
              // tslint:disable-next-line: jsx-no-lambda
              <button onClick={() => this.setState({ active: k })}>
                {" "}
                {k}{" "}
              </button>
            ))}
            <OtsimoJsonSchemaForm
              schema={data[this.state.active]}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
