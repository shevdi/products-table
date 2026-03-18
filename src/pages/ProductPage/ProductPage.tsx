import { useState } from 'react';
import { AddProductForm, ProductTable, ProductSearch, Logout } from '@/features';
import { useProductPageParams } from '@/features/ProductTable/hooks/useProductPageParams';
import { useProductsQuery } from '@/features/ProductTable/hooks/useProductsQuery';
import { ProgressBar, Pagination, Icon, Modal } from '@/components';
import styles from './ProductPage.module.css';

export function ProductPage() {
  const {
    search,
    page,
    sorting,
    handleSearchChange,
    handlePageChange,
    handleSortingChange,
  } = useProductPageParams();

  const {
    products,
    totalItems,
    isLoading,
    handleRefresh,
    pageSize,
  } = useProductsQuery(search, page, sorting);

  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Logout />
      <div className={styles.pageSearch}>
        <div className={styles.pageSearchContent}>
          <h1 className={styles.pageTitle}>Товары</h1>
          <div className={styles.pageHeader}>
            <ProductSearch value={search} onChange={handleSearchChange} />
          </div>
        </div>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Все позиции</h2>
          <div className={styles.sectionActions}>
            <button
              type="button"
              className={styles.refreshBtn}
              aria-label="Обновить"
              onClick={handleRefresh}
            >
              <Icon name="reload" size={20} />
            </button>
            <button type="button" className={styles.addBtn} onClick={() => setAddModalOpen(true)}>
              <Icon name="plus-circle" size={20} />
              Добавить
            </button>
          </div>
        </div>
        {isLoading && <ProgressBar />}
        <ProductTable
          products={products}
          sorting={sorting}
          onSortingChange={handleSortingChange}
          isLoading={isLoading}
        />
        <Pagination
          className={styles.pagination}
          page={page}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
      <Modal open={addModalOpen} onOpenChange={setAddModalOpen}>
        <h2 className={styles.modalTitle}>Добавить товар</h2>
        <AddProductForm onSuccess={() => setAddModalOpen(false)} />
      </Modal>
      {isLoading && (
        <div className={styles.progressBarWrapper}>
          <ProgressBar />
        </div>
      )}
      <Logout />
    </div>
  );
}
