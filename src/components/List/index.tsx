import { Colors, moderateScale } from "@utils";
import React, { useCallback } from "react";
import { FlatList, RefreshControl, ActivityIndicator, } from "react-native";


type FlatListProp = React.ComponentProps<typeof FlatList>;

interface ListProp extends FlatListProp {
  data: any[],
  refreshing?: boolean,
  onRefresh?: () => void
  loadMore?: boolean,
  onEndReached?: () => void,
  ListFooterComponent?: any,
  renderItem: any
  extraData?: any,
  ListEmptyComponent?: any,
  props?: any,
  horizontal?: boolean,
  numColumns?: number,
  loader?: boolean,
  emptyMessage?: string,
}

export const List = ({
  data,
  renderItem,
  refreshing,
  onRefresh,
  loadMore,
  onEndReached,
  ListFooterComponent,
  extraData,
  ListEmptyComponent,
  horizontal = false,
  numColumns,
  loader,
  emptyMessage,
  ...props
}: ListProp) => {


  const renderFooter = () => {
    if (!loadMore) return null;
    return (
      <ActivityIndicator
        size={moderateScale(22)}
        color={Colors.main}
        style={{ marginBottom: moderateScale(9) }}
      />
    );
  };

  const keyExtractor = useCallback((item: any, index: any) => index.toString(), []);
  return (

    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      extraData={extraData}
      horizontal={horizontal}
      numColumns={numColumns}
      refreshControl={
        <RefreshControl
          refreshing={refreshing!}
          onRefresh={onRefresh}
          colors={[Colors.main, Colors.medGray, Colors.lightGray]}
        />}
      // showsVerticalScrollIndicator={false}
      ListFooterComponent={ListFooterComponent || renderFooter}
      onEndReachedThreshold={0.4}
      {...props}

    />
  );
};
