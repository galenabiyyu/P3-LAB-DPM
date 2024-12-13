import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { fetchProducts } from '../services/api';
import ProductItem from './ProductItem';

class ProductList extends Component {
  state = {
    products: [],
    isLoading: true,
  };

  // Lifecycle method - componentDidMount
  componentDidMount() {
    this.loadProducts();
  }

  // Lifecycle method - componentWillUnmount
  componentWillUnmount() {
    this.setState({ products: [], isLoading: true });
  }

  loadProducts = async () => {
    const products = await fetchProducts();
    this.setState({ products, isLoading: false });
  };

  render() {
    const { products, isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProductItem product={item} />}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default ProductList;
