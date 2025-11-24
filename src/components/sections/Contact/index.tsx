import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ContactSection = styled.section`
  padding: 5rem 0 3rem 0;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 768px) {
    padding: 3.5rem 0 2.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${(props) => props.theme.typography.fontFamily.secondary};
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 0.65rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  i {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }

  div {
    h4 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
      color: ${(props) => props.theme.colors.text};
    }

    p {
      color: ${(props) => props.theme.colors.text};
      opacity: 0.8;
    }
  }
`;

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    alert("Thank you for your message!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <ContactSection>
      <Container>
        <SectionTitle>{t("contact.title")}</SectionTitle>
        <ContactGrid>
          <FormWrapper>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">{t("contact.form.name")}</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">{t("contact.form.email")}</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">{t("contact.form.message")}</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : t("contact.form.submit")}
              </SubmitButton>
            </Form>
          </FormWrapper>

          <ContactInfo>
            <h3>Get in Touch</h3>
            <InfoItem>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>Vietnam</p>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+84 2913 888 899</p>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@tmlseafood.com</p>
              </div>
            </InfoItem>
          </ContactInfo>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};
