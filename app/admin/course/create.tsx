import { Create, SimpleForm, TextInput, required } from "react-admin";

export const CourseCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput label="Title" validate={[required()]} source="title" />
        <TextInput
          label="Image"
          validate={[required()]}
          source="imageSrc"
          aria-required
        />
      </SimpleForm>
    </Create>
  );
};
