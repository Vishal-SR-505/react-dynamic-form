export const FormDataObject = {
    title: 'Basic Form to Add Employee',
    fieldsPerRow: 2, 
    Fields: [
        {
            name: 'firstName',
            field: "input",
            type: 'text',
            title: 'First Name',
            placeholder: 'Enter value for First Name',
            validation: {
                required: true,
                minLength: 1,
                dataType: "string",
                maxLength: 5,
            }
        },
        
        {
            name: 'lastName',
            type: 'text',
            field: "input",
            title: 'Last Name',
            placeholder: 'Enter value for Last Name',
            validation: {
                required: true,
                minLength: 2,
                dataType: "string",
            }
        },
        {
            name: 'age',
            type: 'number',
            field: "input",
            title: 'Age',
            placeholder: 'Enter value for Age',
            validation: {
                required: true,
            }
        },
        {
            name: 'department',
            type: 'select',
            field: "select",
            title: 'Department',
            options: [
                { value: 'HR', label: 'HR' },
                { value: 'Finance', label: 'Finance' },
                { value: 'IT', label: 'IT' },
                { value: 'Marketing', label: 'Marketing' },
            ],
            validation: {
                required: true,
            }
        },
    ]
};
