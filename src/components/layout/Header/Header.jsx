import { HomeOutlined } from '@ant-design/icons'
import React from 'react'
import { getImagePath } from '../../../helpers/image'
import { HeaderWrapper, ItemHeader } from './headerStyle'

const Header = () => {
    return (
        <HeaderWrapper>
            <ItemHeader to="/" ><HomeOutlined /></ItemHeader>
            <ItemHeader to="/store">Tree</ItemHeader>
            <ItemHeader to="/draw">Draw</ItemHeader>
            <ItemHeader to="/list">List Member</ItemHeader>
            {/* <ItemHeader to="/iphone">Iphone</ItemHeader>
            <ItemHeader to="/watch">Watch</ItemHeader>
            <ItemHeader to="/airpod">AirPods</ItemHeader>
            <ItemHeader>TV & Home</ItemHeader>
            <ItemHeade>Only on Apple</ItemHeade */}
            <ItemHeader><img src={getImagePath("search-icon.svg")} alt="" /></ItemHeader>
            {/* <ItemHeader><img src={getImagePath("bag-icon.svg")} alt="" /></ItemHeader> */}

        </HeaderWrapper>
    )
}

export default Header