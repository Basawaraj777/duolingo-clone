import { Edit, SimpleForm, TextInput, required } from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput label="ID" validate={[required()]} source="id" />
        <TextInput label="Title" validate={[required()]} source="title" />
        <TextInput
          label="Image"
          validate={[required()]}
          source="imageSrc"
          aria-required
        />
      </SimpleForm>
    </Edit>
  );
};
