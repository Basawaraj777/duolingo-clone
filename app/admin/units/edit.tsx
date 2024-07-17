import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const UnitsEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput label="Id" validate={[required()]} source="id" />
        <TextInput label="Title" validate={[required()]} source="title" />
        <TextInput
          source="description"
          label="Description"
          validate={[required()]}
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Edit>
  );
};
