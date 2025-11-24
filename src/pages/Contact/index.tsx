import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SEO } from "../../components/common/SEO";
import { Wave } from "../../components/common/Wave";

const ContactContainer = styled.div`
  width: 100%;
  padding-top: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroSection = styled.section`
  position: relative;
  color: white;
  padding: 0;
  text-align: center;
  background-image: url("https://trinityvietnam.vn/wp-content/uploads/2025/03/banner_news2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 60rem;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary}80 0%,
      ${(props) => props.theme.colors.secondary}80 100%
    );
    z-index: 1;
  }

  > ${Container} {
    position: relative;
    z-index: 2;
    padding: 12rem 0 10rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    min-height: 55rem;

    > ${Container} {
      padding: 10rem 0 8rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    min-height: 45rem;

    > ${Container} {
      padding: 8rem 0 6rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    min-height: 35rem;

    > ${Container} {
      padding: 6rem 0 4rem;
    }
  }

  @media (max-width: 480px) {
    min-height: 30rem;

    > ${Container} {
      padding: 4rem 0 3rem;
    }
  }
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 2000;
  color: #ffffff;
  margin: 0 0 1.8rem 0;
  letter-spacing: 0.2em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-family: "SVN-BebasNeuePro", "Bebas Neue", Arial, sans-serif;
  line-height: 1.3;
  text-transform: uppercase;
  font-style: normal;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 4.2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 3.2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  max-width: 800px;
  margin: 1.6rem auto 0;
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.3rem;
    margin: 1.2rem auto 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1.2rem;
    margin: 1rem auto 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0.8rem auto 0;
  }
`;

const MapSection = styled.section`
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 60rem;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 50rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 40rem;
  }
`;

const ContentSection = styled.section`
  padding: 0;
  background: transparent;
  position: relative;
  margin-top: -15rem;
  z-index: 2;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: -12rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: -10rem;
  }
`;

const FormContainer = styled.div`
  border: 0.5rem solid #d9e4fc;
  border-radius: 1.6rem;
  padding: 3.2rem;
  background-color: white;
  margin-top: 0;
  position: relative;
  z-index: 3;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 2.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 40rem;
  gap: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactFormWrapper = styled.div`
  background: transparent;
  padding: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0;
  }
`;

const FormTitle = styled.h2`
  font-size: 4rem;
  margin-bottom: 2.4rem;
  line-height: 1.4;
  font-weight: 600;

  span {
    color: #0045c4;
    font-weight: 600;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2.8rem;
  }
`;

const ContactForm = styled.form``;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #000;
  font-size: 1.4rem;

  .text {
    display: block;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 1.4rem;
  border: 0.1rem solid #e0e0e0;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: inherit;
  outline: none;
  color: #000;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary || "#0045C4"};
    box-shadow: 0 0 0 0.2rem rgba(0, 69, 196, 0.1);
  }

  &.error {
    border-color: #dc3545;
  }

  &::placeholder {
    color: #999;
    font-weight: 400;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1.2rem;
    font-size: 1.3rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.4rem;
  border: 0.1rem solid #e0e0e0;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  min-height: 12rem;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  outline: none;
  color: #000;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary || "#0045C4"};
    box-shadow: 0 0 0 0.2rem rgba(0, 69, 196, 0.1);
  }

  &.error {
    border-color: #dc3545;
  }

  &::placeholder {
    color: #999;
    font-weight: 400;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1.2rem;
    font-size: 1.3rem;
    min-height: 10rem;
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1.5rem;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  border: 0.1rem solid #c3e6cb;
  font-size: 1.4rem;
  line-height: 1.6;
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 1.5rem;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
  border: 0.1rem solid #f5c6cb;
  font-size: 1.4rem;
  line-height: 1.6;
`;

const FieldError = styled.span`
  color: #dc3545;
  font-size: 1.2rem;
  margin-top: 0.4rem;
  display: block;
  font-weight: 500;
`;

const ContactInfoWrapper = styled.div`
  background: #0045c4;
  padding: 6rem;
  border-radius: 1.6rem;
  color: white;
  height: 100%;
  margin-bottom: 6rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 4rem;
    margin-top: 0;
    margin-bottom: 4rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 2.5rem;
    margin-bottom: 2rem;
  }
`;
const InfoSubtitle = styled.h3`
  font-size: 3.2rem;
  color: white;
  margin-bottom: 1.2rem;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.4rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;
const Logo = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  object-fit: cover;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 4rem;
    height: 4rem;
  }
`;

const InfoItem = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
  line-height: 1.6;
  transition: all 0.3s ease;
  font-size: 1.4rem;

  &:hover {
    color: #86f2ff;
  }

  i {
    color: white;
    font-size: 1.6rem;
    margin-top: 0.3rem;
    flex-shrink: 0;
    min-width: 1.6rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #0045c4;
  color: white;
  font-size: 1.8rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 0.4rem 0.8rem rgba(0, 69, 196, 0.3);
    background-color: #003399;
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: contain;
  }
`;

const CompanyTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0;
  margin-top: 2rem;
  line-height: 1.4;
  letter-spacing: -0.02em;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const TaxCode = styled.p`
  font-size: 1.4rem;
  color: white;
  margin: 0.5rem 0 2rem 0;
  opacity: 0.9;
  font-weight: 400;
`;

const ContactInfo = styled.div`
  margin: 2rem 0;
  padding: 2rem 0;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-radius: 100rem;
  transition: 0.4s ease;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  border: 0.1rem solid ${(props) => props.theme.colors.primary};
  gap: 1rem;
  font-size: 1.6rem;
  height: 4.8rem;
  min-width: 16.3rem;
  white-space: nowrap;
  color: white;
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transform: scaleY(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease;
    background-color: white;
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 2;
    transition: 0.4s;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::after {
      transform-origin: top right;
      transform: scaleY(1);
    }

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 4rem;
    font-size: 1.4rem;
  }
`;

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    details: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()\u0000-\u007F]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Implement actual API call
      // await axios.post('/api/contact', formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        details: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <SEO
        title={t("contact.seoTitle")}
        description={t("contact.seoDescription")}
        keywords={t("contact.seoKeywords")}
        url="http://tmlseafood.com/contact/"
      />
      <HeroSection>
        <Container>
          <Title>{t("contact.hero.title")}</Title>
          <Subtitle>{t("contact.hero.subtitle")}</Subtitle>
        </Container>
      </HeroSection>

      <MapSection>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.786707745899!2d105.48936187584657!3d9.294488990712858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0d9e7e7e7e7e7%3A0x1234567890abcdef!2sGia%20Rai%2C%20Bac%20Lieu%20Province%2C%20Vietnam!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </MapSection>

      <ContentSection>
        <Container>
          <FormContainer>
            <Grid>
              <ContactFormWrapper>
                <FormTitle>
                  <span>{t("contact.form.title")}</span>
                </FormTitle>

                {submitted && (
                  <SuccessMessage>
                    {t("contact.form.successMessage")}
                  </SuccessMessage>
                )}

                {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}

                <ContactForm onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="firstName">
                        {t("contact.form.firstName")}
                      </Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder={t("contact.form.placeholder.firstName")}
                        className={errors.firstName ? "error" : ""}
                      />
                      {errors.firstName && (
                        <FieldError>{errors.firstName}</FieldError>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="lastName">
                        {t("contact.form.lastName")}
                      </Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={t("contact.form.placeholder.lastName")}
                        className={errors.lastName ? "error" : ""}
                      />
                      {errors.lastName && (
                        <FieldError>{errors.lastName}</FieldError>
                      )}
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="email">
                        {t("contact.form.emailLabel")}
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.form.placeholder.email")}
                        className={errors.email ? "error" : ""}
                      />
                      {errors.email && <FieldError>{errors.email}</FieldError>}
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="phone">
                        {t("contact.form.phoneLabel")}
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("contact.form.placeholder.phone")}
                        className={errors.phone ? "error" : ""}
                      />
                      {errors.phone && <FieldError>{errors.phone}</FieldError>}
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <Label htmlFor="details">{t("contact.form.details")}</Label>
                    <TextArea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder={t("contact.form.placeholder.details")}
                    />
                  </FormGroup>

                  <SubmitButton type="submit" disabled={isSubmitting}>
                    <span>
                      {isSubmitting
                        ? t("contact.form.sending")
                        : t("contact.form.sendButton")}
                    </span>
                  </SubmitButton>
                </ContactForm>
              </ContactFormWrapper>

              <ContactInfoWrapper>
                <InfoSubtitle>{t("contact.info.subtitle")}</InfoSubtitle>

                <ContactInfo>
                  <Logo
                    src="/assets/images/tml-logo.png"
                    alt="Thai Minh Long Seafood Logo"
                  />

                  <InfoItem
                    href="https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+Th%E1%BB%A7y+S%E1%BA%A3n+Th%C3%A1i+Minh+Long/@9.2339662,105.4427917,724m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31a1151a10fdacf7:0x561a91455cc4deb2!8m2!3d9.2339662!4d105.4427917!16s%2Fg%2F11cs1wjg6t?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{t("contact.info.address")}</span>
                  </InfoItem>

                  <InfoItem href="tel:+842913888899">
                    <i className="fa-solid fa-phone"></i>
                    <span>{t("contact.info.tel")}</span>
                  </InfoItem>

                  <InfoItem href="tel:+842913836888">
                    <i className="fa-solid fa-fax"></i>
                    <span>{t("contact.info.fax")}</span>
                  </InfoItem>

                  <InfoItem href="mailto:info@tmlseafood.com">
                    <i className="fa-solid fa-envelope"></i>
                    <span>{t("contact.info.email")}</span>
                  </InfoItem>
                </ContactInfo>

                <div>
                  <CompanyTitle>
                    THAI MINH LONG SEAFOOD COMPANY LIMITED
                  </CompanyTitle>
                  <TaxCode>{t("contact.info.taxCode")}</TaxCode>
                </div>

                <SocialLinks>
                  <SocialLink
                    href="https://www.facebook.com/trinityvietnam1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://trinityvietnam.vn/wp-content/uploads/2025/02/ic-fb.svg"
                      alt="Facebook"
                    />
                  </SocialLink>
                  <SocialLink
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://trinityvietnam.vn/wp-content/uploads/2025/02/ic-ins.svg"
                      alt="Instagram"
                    />
                  </SocialLink>
                  <SocialLink
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://trinityvietnam.vn/wp-content/uploads/2025/02/ic-yt.svg"
                      alt="YouTube"
                    />
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://trinityvietnam.vn/wp-content/uploads/2025/03/linkedin-1.png"
                      alt="LinkedIn"
                    />
                  </SocialLink>
                </SocialLinks>
              </ContactInfoWrapper>
            </Grid>
          </FormContainer>
        </Container>
      </ContentSection>
    </ContactContainer>
  );
};
