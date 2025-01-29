import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ToastBackHandler from "../../components/ToastBackHandler";
import { getArtworks } from "../../services/api";
import ItemList from "./components/ItemList";
import ErrorMsg from "../../components/ErrorMsg";

const ArtworksScreen = () => {
  const [loading, setLoading] = useState(false);
  const [loadingScroll, setLoadingScroll] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await getArtworks();
      setData(response.data);
    } catch (error) {
      if (error) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEndReached = async () => {
    setLoadingScroll(true);
    try {
      const response = await getArtworks(page);
      setData(data.concat(response.data));
      setPage(page + 1);
    } catch {
    } finally {
      setLoadingScroll(false);
    }
  };

  return (
    <View style={styles.container}>
      {!error ? (
        <ErrorMsg onPress={init} />
      ) : (
        <>
          <FlatList
            data={data}
            renderItem={({ item }) => <ItemList item={item} />}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={styles.containerFlatlist}
            numColumns={2}
            refreshing={loading}
            onRefresh={init}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
          />
          {loadingScroll && (
            <View style={styles.p10}>
              <ActivityIndicator />
            </View>
          )}
          <ToastBackHandler />
        </>
      )}
    </View>
  );
};

export default ArtworksScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  containerFlatlist: { flexDirection: "column" },
  p10: {padding: 4}
});
