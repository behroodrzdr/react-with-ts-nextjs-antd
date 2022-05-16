import React from 'react';
import styled from 'styled-components';
import variables from '../../../constant/variables';

const Menu = () => {
    const Navbar = styled.nav`
        &:> ul li {
            display: inline-block; 
        }
    `;

    const UnorderedList = styled.ul`
        width: 100%;
        height: 54px;
        line-height: 54px;
        position: relative;
        text-align: center;
        margin: auto; 
        padding: auto;
        background: #FFFFFF;
        border-bottom: 1px solid rgba(21, 29, 63, 0.3);
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 19px 200px;
        transition: all ease-in 0.3s;
        li{
            float: left;
            width: auto;
            a{
                display: block;
                width: auto;
                text-decoration: none;
            }
        }
        li:hover{
 		    color: #8FC3EA;
 		    ul{
                transition: all ease-out 0.3s;
                visibility: visible; 
 		    }
 	    }
    `;
    const List = styled.li``;

    const MenuCaption = styled.a`
        text-decoration: none;
        text-align: center;
        color: ${variables.CChineseBlack};
        font-size: ${variables.size14};
        font-weight: 700;
        transition: all ease-ine 0.2s;
        &:hover{
            color: #8FC3EA;
            transition: all ease-in 0.3s;
        }
    `;
    const SubmenuListItem = styled.li`
       
    `;
    const UnorderedListItem = styled.ul`
        background: #F0F3FF;
        padding: 13px 50px;
        display: flex;
        z-index: 999;
        visibility: hidden;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 14px 200px;
        position: absolute;
        left: 0;
        height: 40px;
        line-height: 40px;
        border-top: 1px solid rgba(21, 29, 63, 0.3);
        transition: all ease-out 0.3s;
    `;
    const SubmenuListLink = styled.a`
        color: #606060;
    `;
    const Divider = styled.div`
        position: relative;
        top: -0.06em;
        display: inline-block;
        height: 1.4em;
        margin: 0 8px;
        vertical-align: middle;
        border-top: 0;
        border-right: 0.5px solid #8391CA;
    `;

    return (
        <>
            <Navbar>
                <UnorderedList>
                    <List>
                        <MenuCaption href={'#'}>New</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>EARN LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>EARN LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>EARN LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>EARN LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                    <List>
                        <MenuCaption href={'#'}>Brands</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Brands LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Brands LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Brands LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Brands LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                    <List>
                        <MenuCaption href={'#'}>Skin Care</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Skin LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Skin LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Skin LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Skin LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                    <List>
                        <MenuCaption href={'#'}>Makeup</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Makeup LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Makeup LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Makeup LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Makeup LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                    <List>
                        <MenuCaption href={'#'}>Hair Care</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Hair LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Hair LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Hair LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Hair LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                    <List>
                        <MenuCaption href={'#'}>Bath & Body</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Bath LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Bath LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Bath LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>EARN LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                    <List>
                        <MenuCaption href={'#'}>Mens</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Mens LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Mens LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Mens LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Mens LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                    <List>
                        <MenuCaption href={'#'}>Baby Care</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Baby LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Baby LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Baby LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>Baby LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                    <List>
                        <MenuCaption href={'#'}>GIFT</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>GIFT LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>GIFT LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>GIFT LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>GIFT LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                    <List>
                        <MenuCaption href={'#'}>SALE</MenuCaption>
                        <UnorderedListItem>
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>SALE LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>SALE LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>SALE LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                            <Divider />
                            <SubmenuListItem>
                                <SubmenuListLink href={"#"}>SALE LOYALTY POINTS</SubmenuListLink>
                            </SubmenuListItem>
                        </UnorderedListItem>
                    </List>
                </UnorderedList>
            </Navbar>
        </>
    )
}
export default Menu;