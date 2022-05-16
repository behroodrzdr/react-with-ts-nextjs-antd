import React from 'react';
import styled from 'styled-components';
import variables from '../../../constant/variables';

const Wrapper = styled.footer`
    padding: 140px 140px 0 140px;
    background: ${variables.CArsenic};
    display: flex;
    flex-direction: column;
`;
const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`;
const MenuListWrapper = styled.div`
    padding-right: 44px;
    display: flex;
    flex-direction: column;
`;
const MenuListTitle = styled.div`
    font-size: ${variables.size22};
    font-weight: 600;
    color: ${variables.CWhite};
    margin-bottom: 15px;
`;
const MenuListItem = styled.a`
    color: ${variables.CWhite};
    font-size: ${variables.size15};
    margin-bottom: 10px;
`;

const Logo = styled.img`
        width: 100%;
    `;
const LogoWrapper = styled.div`
    width: 33%;
    margin-right: 122px;
`;
const LogoPragraph = styled.p`
    font-size: ${variables.size15};
    line-height: 28px;
    color: ${variables.CWhite};
    margin-top: 38px;
`;
const MenuWrapper = styled.div`
    display: flex;
`;
const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const ContactItemWrapper = styled.div`
    display: flex;
    align-items; center;
    margin-bottom: 13px;
`;
const ContactIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 8px;
`;
const ContactText = styled.span`
    font-size: ${variables.size15};
    color: ${variables.CWhite};
    line-height: 21px;
    max-width: 235px;
`;
const SocialTitle = styled.span`
    font-size: ${variables.size15};
    color: ${variables.CWhite};
    font-weight: 600;
`;
const CopyRightWrapper = styled.div`
    border-top: 1px solid #C9CBD6;
    padding: 28px 0;
    margin-top: 38px;
    position: relative;
`;
const CopyRightText = styled.p`
    font-size: ${variables.size13};
    color: ${variables.CWhite};
`;
const PaymentProvider = styled.div`
    margin-top: 29px;
    display: flex;
    justify-content: space-between;
    align-items: end;
`;
const PaymentLogo = styled.img`
    width: 141px;
`;
const AudImg = styled.img`
    width: 48px;
    height: 23px;
    margin-right: 9px;
`;
const AudImgWrapper = styled.div`
    display: flex;
`;
const AudText = styled.span`
    font-size: ${variables.size15};
    color: ${variables.CWhite};
`;
const RightSectionWrapper = styled.div`
    display: flext;
`;
const GoToTopButton = styled.div`
        background: url(../assets/gotopicon.svg) no-repeat;
        position: absolute;
        top: -40px;
        width: 82px;
        height: 82px;
        left: 50%;
        cursor: pointer;
        transform: translate(-50%);
    `;
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // for smoothly scrolling
        });
      };
    
    return (
        <Wrapper>
            <Main>
                <LogoWrapper>
                    <Logo src={'../assets/Indie_Brands_Logo.svg'} />
                    <LogoPragraph>
                        Indie Brands’ unique, open-sell environment features an ever-increasing amount of classic 
                        and emerging brands across a broad range of product categories including skincare, makeup, 
                        fragrance, body and hair care
                    </LogoPragraph>
                </LogoWrapper>
                <RightSectionWrapper>
                    <MenuWrapper>
                        <MenuListWrapper>
                            <MenuListTitle>Menu</MenuListTitle>
                            <MenuListItem href="#">New</MenuListItem>
                            <MenuListItem href="#" >Brands</MenuListItem>
                            <MenuListItem href="#" >Skincare</MenuListItem>
                            <MenuListItem href="#" >Makeup</MenuListItem>
                            <MenuListItem href="#" >Hair Care</MenuListItem>
                            <MenuListItem href="#" >Bath & Body</MenuListItem>
                            <MenuListItem href="#" >Mens</MenuListItem>
                            <MenuListItem href="#" >Baby Care</MenuListItem>
                            <MenuListItem href="#" >Gift</MenuListItem>
                            <MenuListItem href="#" >Sale</MenuListItem>
                        </MenuListWrapper>
                        <MenuListWrapper>
                            <MenuListTitle>Support</MenuListTitle>
                            <MenuListItem href="#" >My Account</MenuListItem>
                            <MenuListItem href="#" >Help</MenuListItem>
                            <MenuListItem href="#" >Privacy Policy</MenuListItem>
                            <MenuListItem href="#" >Return Forms & Policy</MenuListItem>
                            <MenuListItem href="#" >Delivery & Shoping</MenuListItem>
                            <MenuListItem href="#" >Payment Methods</MenuListItem>
                            <MenuListItem href="#" >Contact us</MenuListItem>
                        </MenuListWrapper>
                        <MenuListWrapper>
                            <MenuListTitle>About Us</MenuListTitle>
                            <MenuListItem href="#" >Careers</MenuListItem>
                            <MenuListItem href="#" >Beauty Feed</MenuListItem>
                        </MenuListWrapper>
                    </MenuWrapper>
                    <ContactInfoWrapper>
                        <ContactItemWrapper>
                            <ContactIcon src='../icons/telIcon.svg' />
                            <ContactText>Hotline: +01 234 567 890</ContactText>
                        </ContactItemWrapper>
                        <ContactItemWrapper>
                            <ContactIcon src='../icons/watchIcon.svg' />
                            <ContactText>Monday – Friday: 9:00 am - 6:00 pm</ContactText>
                        </ContactItemWrapper>
                        <ContactItemWrapper>
                            <ContactIcon src='../icons/mailBoxIcon.svg' />
                            <ContactText>hello@indiebrands.com.au</ContactText>
                        </ContactItemWrapper>
                        <ContactItemWrapper>
                            <ContactIcon src='../icons/mailBoxIcon.svg' />
                            <ContactText>Unit C3 / 1-3 Rodborough Road Frenchs Forest NSW 2086 AUSTRALIA</ContactText>
                        </ContactItemWrapper>
                        <ContactItemWrapper style={{ marginLeft: '26px'}}>
                            <SocialTitle style={{ marginRight: '36px '}}>Get Social</SocialTitle>
                            <ContactIcon style={{ marginRight: '18px' }} src='../icons/instagramIcon.svg' />
                            <ContactIcon style={{ marginRight: '18px' }}  src='../icons/twitterIcon.svg' />
                            <ContactIcon src='../icons/linkedinIcon.svg' />
                        </ContactItemWrapper>
                        <PaymentProvider>
                            <AudImgWrapper>
                                <AudImg src='../assets/aud_payment.png' />
                                <AudText>AUD A$</AudText>
                            </AudImgWrapper>
                            <PaymentLogo src='../assets/payments_logo.png' />
                        </PaymentProvider>
                    </ContactInfoWrapper>
                </RightSectionWrapper>
            </Main>
           <CopyRightWrapper>
               <GoToTopButton onClick={scrollToTop} />
               <CopyRightText>Indie Brands Australia. All Rights Reserved © 2022 </CopyRightText>
           </CopyRightWrapper>
        </Wrapper>
    )
};
export default Footer;