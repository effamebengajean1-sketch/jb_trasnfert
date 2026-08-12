export function useAdmin() {
  const api = useApi();
  const loading = ref(false);
  const error = ref(null);

  async function fetchStats() {
    loading.value = true; error.value = null;
    try { return await api.get('/admin/stats'); }
    catch (err) { error.value = err?.data?.error || 'Erreur'; throw err; }
    finally { loading.value = false; }
  }

  async function fetchUsers(params = {}) {
    loading.value = true; error.value = null;
    try { return await api.get('/admin/users', { query: params }); }  // ← CORRIGÉ
    catch (err) { error.value = err?.data?.error || 'Erreur'; throw err; }
    finally { loading.value = false; }
  }

  async function fetchGalleries(params = {}) {
    loading.value = true; error.value = null;
    try { return await api.get('/admin/galleries', { query: params }); }  // ← CORRIGÉ
    catch (err) { error.value = err?.data?.error || 'Erreur'; throw err; }
    finally { loading.value = false; }
  }

  async function deleteUser(id) {
    return api.delete(`/admin/users/${id}`);
  }

  async function deleteGallery(id) {
    return api.delete(`/admin/galleries/${id}`);
  }

  return { loading, error, fetchStats, fetchUsers, fetchGalleries, deleteUser, deleteGallery };
}