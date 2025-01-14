import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const UserWrapper = styled.View`
    width: 100%;
    // the padding below has the effect of padding-horizontal only, up-down (vertical) is zero;
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: ${RFValue(18)}px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${getStatusBarHeight() + RFValue(100)}px;
`;
