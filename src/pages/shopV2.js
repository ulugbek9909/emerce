import React, {useState} from 'react';
import * as styles from './shopV2.module.css';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';

import Config from '../config.json';
import {generateMockProductData} from '../helpers/mock';

const ShopV2Page = (props) => {
  const data = generateMockProductData(9, 'woman');
  const filters = Config.filters;

  const [filterState, setFilterState] = useState(filters);

  const filterTick = (e, categoryIndex, labelIndex) => {
    const filterStateCopy = [...filterState];
    filterStateCopy[categoryIndex].items[labelIndex].value = !e.target.value;
    setFilterState(filterStateCopy);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`👗Milliy va Zamonaviy Liboslar`}
          subtitle={
            ''
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <div className={styles.filterContainer}>
              {filterState.map((category, categoryIndex) => {
                return (
                  <div key={categoryIndex}>

                  </div>
                );
              })}
            </div>
            <div className={styles.productContainer}>
              <ProductCardGrid data={data}></ProductCardGrid>
            </div>
          </div>

        </Container>
      </div>
      <LayoutOption />
    </Layout>
  );
};

export default ShopV2Page;
