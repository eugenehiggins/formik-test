import React from "react";
import ReactDOM from "react-dom";
import {
	Button, Checkbox,
	Container, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel,
	Grid,
	Paper,
	Typography,
} from "@material-ui/core";
import {Formik, Form, Field, FieldArray, useField} from "formik";
import "./styles.css";

const CheckboxGroup = (props) => {
	const [field, meta, helpers] = useField({...props, type: 'checkbox', });
	const { setValue, setTouched } = helpers;
	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">{props.label}</FormLabel>
			<FormGroup>
				<FieldArray name="options">
					{({ insert, remove, push}) => (
						props.options.length > 0 && props.options.map((option,index) => (
							
							<FormControlLabel
								{...props}
								key={index}
								name={props.name}
								control={<Checkbox />}
								label={option.label}
								value={option.name}
							/>
						))
					)}
				</FieldArray>
			
			</FormGroup>
			<FormHelperText>Be careful</FormHelperText>
		</FormControl>
	)
}

const TestForm = () =>(

	  <Formik
	    initialValues={{
	    	symptoms: [],
	    }}
	
	    onSubmit={(values, { setSubmitting }) => {
		    setTimeout(() => {
			    alert(JSON.stringify(values, null, 2));
			    setSubmitting(false);
		    }, 400);
	    }}
	  >
		  {(props, values) => (
		  <Form>
			  <CheckboxGroup
				  
				  name="symptoms"
				  options={[
					  {name:"fever",label:"Fever (temperature over 100.3 °F) without having taken any fever reducing medications\""},
					  {name:"lostSmellOrTaste",label:"Loss of smell or taste"},
				  ]}
			  />
			  <button type="submit">Submit</button>
		  </Form>
			  )}
	  </Formik>
);

function App() {
  return <TestForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

