import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockProductData } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';

const ShopPage = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const data = generateMockProductData(6, 'woman');

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
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

          <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          />
          <div className={styles.productContainer}>
            <ProductCardGrid data={data}></ProductCardGrid>
          </div>
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  );
};

export default ShopPage;
