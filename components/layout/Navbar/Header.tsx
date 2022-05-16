/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import variables from '../../../constant/variables';
import TrSearchInput from '../../common/TrSearchInput';
import TrButton from '../../common/TrButton';

interface IFlexWrapperGrow {
    flexGrow: number,
    marginRight: string,
}
const Header = () => {
    const Main = styled.div`
        background: ${variables.CArsenic};
        color: ${variables.CWhite};
        padding: 47px 133px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    `;
    const Logo = styled.img`
        width: 100%;
    `;
    const FlexWrapperGrow = styled.div<IFlexWrapperGrow>`
        flex-grow: ${props => props.flexGrow};
        margin-right: ${props => props.marginRight};
    `;
    const AccountSectionWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: start;
    `;
    const OrderSectionWrapper = styled.div`
        display: flex;
        align-items: center;
        margin-left: 14px;
    `;
    const OrderSectionItem = styled.div`
        display: flex;
        align-items: center;
        margin-left: 20px;
    `;
    const OrderSectionIcon = styled.img`
        width: 18px;
        height: 15px;
    `;
    const OrderSectionText = styled.span`
        font-size: ${variables.size15};
        color: ${variables.CWhite};
        margin: 0 4px;

    `;

    return (
        <>
            <Main>
                <FlexWrapperGrow marginRight={variables.size41} flexGrow={0}>
                    <Logo src={'../assets/Indie_Brands_Logo.svg'} />
                </FlexWrapperGrow>
                <FlexWrapperGrow marginRight={variables.size41} flexGrow={1}>
                    <TrSearchInput withSearchIocn placeHolder='Search for products, brands & categories…' />
                </FlexWrapperGrow>
                <FlexWrapperGrow flexGrow={0} marginRight='0'>
                    <AccountSectionWrapper>
                        <TrButton 
                            style={{ padding: '13px 31px', fontWeight: 400 }} 
                            type="Text" onClick={ () => console.log('trbutton')}
                        >
                            Sign in
                        </TrButton>
                        <TrButton 
                            style={{ padding: '13px 31px', fontWeight: 600}} 
                            type="Primary" onClick={ () => console.log('trbutton')}
                        >
                            SIGN UP
                        </TrButton>
                        <OrderSectionWrapper>
                            <OrderSectionItem>
                                <OrderSectionText>0</OrderSectionText>
                                <OrderSectionIcon src={'../icons/heartIcon.svg'}/>
                            </OrderSectionItem>
                            <OrderSectionItem>
                                <OrderSectionText>$0.00</OrderSectionText>
                                <OrderSectionIcon src={'../icons/basketIcon.svg'}/>
                            </OrderSectionItem>
                    </OrderSectionWrapper>
                    </AccountSectionWrapper>
                </FlexWrapperGrow>
            </Main>
        </>
    )
};
export default Header;