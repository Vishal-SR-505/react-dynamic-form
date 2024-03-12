export const validateForm = (formData, Fields, setErrors) => {
    const newErrors = {};
    let isValid = true;

    Fields.forEach(field => {
        if (field.validation) {
            const { name } = field;
            const value = formData[name] || '';
            const { minLength, maxLength } = field.validation;
            if (field.validation.required && !value.trim()) {
                newErrors[name] = `${field.title} is required`;
                isValid = false;
            }
            if (minLength && value.length < minLength) {
                newErrors[name] = `${field.title} must be at least ${minLength} characters`;
                isValid = false;
            }
            if (maxLength && value.length > maxLength) {
                newErrors[name] = `${field.title} must be at most ${maxLength} characters`;
                isValid = false;
            }
            if (field.validation.dataType && formData[name]) {
                const { dataType } = field.validation;
                if (dataType === 'number' && isNaN(Number(value))) {
                    newErrors[name] = `${field.title} must be a number`;
                    isValid = false;
                } else if (dataType === 'string' && typeof value !== 'string') {
                    newErrors[name] = `${field.title} must be a string`;
                    isValid = false;
                } else if (dataType === 'email' && !isValidEmail(value)) {
                    newErrors[name] = `Invalid format for ${field.title}`;
                    isValid = false;
                } else if (dataType === 'mobile' && !isValidMobile(value)) {
                    newErrors[name] = `Invalid format for ${field.title}`;
                    isValid = false;
                }
            }
        }
    });

    setErrors(newErrors);
    return isValid;
};

const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidMobile = (mobile) => {
    // Regular expression for mobile number validation
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
};
