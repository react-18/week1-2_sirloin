import SettingFrame from 'components/atoms/SettingFrame';
import Category from 'components/molecules/BasicInfo/Category';
import FilterTag from 'components/molecules/BasicInfo/FilterTag';
import MainImg from 'components/molecules/BasicInfo/MainImg';
import ProductCode from 'components/molecules/BasicInfo/ProductCode';
import ProductInfo from 'components/molecules/BasicInfo/ProductInfo';
import ProductName from 'components/molecules/BasicInfo/ProductName';
import Thumbnail from 'components/molecules/BasicInfo/Thumbnail';
import TotalStock from 'components/molecules/BasicInfo/TotalStock';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import isSavedState, { registerFormState } from 'utils/globalState';

function BasicInfo() {
  const options = [
    {
      img: 'dd',
      option: [
        {
          option1: 'Dd',
          stock: 1,
        },
        {
          option2: 'Dd',
          stock: 1,
        },
      ],
    },
    {
      img: 'dd',
      option: [
        {
          option1: 'Dd',
          stock: 1,
        },
        {
          option2: 'Dd',
          stock: 1,
        },
      ],
    },
  ];
  // test
  // console.log(options);
  const countTotalStock = () => {
    let totalStock = 0;
    options.forEach((optionSet) => {
      optionSet.option.forEach((option) => {
        totalStock += option.stock;
      });
    });
    console.log(totalStock);
  };
  console.log(countTotalStock);

  const isSaved = useRecoilValue(isSavedState);
  const [registerForm, setRegisterForm] = useRecoilState(registerFormState);
  const [basicInfo, setBasicInfo] = useState({});

  const handleBasicInfo = (key, input) => {
    setBasicInfo({
      ...basicInfo,
      [key]: input,
    });
  };

  const saveData = (key, value) => {
    setRegisterForm({
      ...registerForm,
      [key]: value,
    });
  };

  useEffect(() => {
    saveData('basicInfo', basicInfo);
  }, [isSaved]);

  useEffect(() => {
    console.log(registerForm);
  }, [registerForm]);
  return (
    <Wrapper>
      <SettingFrame title="상품기본정보">
        <Category handleBasicInfo={handleBasicInfo} title="selectedCategory" />
        <FilterTag />
        <SettingFramItemWrapper>
          <SettingFramItemContainer>
            <ProductName handleBasicInfo={handleBasicInfo} title="productName" />
          </SettingFramItemContainer>
          <SettingFramItemContainer>
            <ProductCode />
          </SettingFramItemContainer>
        </SettingFramItemWrapper>
        <ProductInfo handleBasicInfo={handleBasicInfo} title="productInfo" />
        <Thumbnail handleBasicInfo={handleBasicInfo} title="thumbnail" />
        <MainImg handleBasicInfo={handleBasicInfo} title="mainImg" />
        <TotalStock />
      </SettingFrame>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
`;

const SettingFramItemWrapper = styled.div`
  display: flex;
`;

const SettingFramItemContainer = styled.div`
  flex-basis: 50%;
`;

export default BasicInfo;
