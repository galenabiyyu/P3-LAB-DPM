import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});

export default HomeScreen;
