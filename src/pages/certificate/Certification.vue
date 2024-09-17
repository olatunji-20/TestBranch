<template>
    <div class="h-[100vh] p-8 bg-gray-200">

        <div class="">
            <q-table
                flat bordered
                ref="tableRef"
                title="My Certifications"
                :rows="rows"
                :columns="columns"
                row-key="id"
                v-model:pagination="pagination"
                :loading="loading"
                :filter="filter"
                binary-state-sort
                @request="onRequest"
                class="rounded-xl p-2"
            >
                <template v-slot:top-right>
                    <q-input borderless dense debounce="300" v-model="filter" placeholder="Search for category" class="border border-red-400 rounded-full px-2">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                    </q-input>
                    <q-btn label="New Certificate" no-caps icon="sms" rounded class="q-ml-md q-px-lg" to="/add-certificate" />
                </template>

                <template v-slot:body-cell-image="props">
                    <q-td :props="props">
                        <div class="w-[80px] h-[50px]">
                            <img :src="props.row.image" :alt="props.row.protein" class="h-[100%] w-[100%]">
                        </div>
                    </q-td>
                </template>

                <template #body-cell-iron="props">
                  <q-td :props="props">
                    <q-btn-group rounded>
                      <q-btn-dropdown label="Edit" to="/edit-certificate" auto-close no-caps rounded color="primary" split>
                        <q-list padding style="width: 250px">
                          <q-item clickable>
                            <p>Copy</p>
                          </q-item>
                          <q-item clickable>
                            <p>Delete</p>
                          </q-item>
                        </q-list>
                      </q-btn-dropdown>
                    </q-btn-group>
                  </q-td>
                </template>
                 
            </q-table>

        </div>
    </div>
</template>


  <script>
  import { ref, onMounted } from 'vue'
  
  const columns = [
    { name: 'image', align: 'left', label: 'Preview', field: 'image', sortable: true },
    { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
    { name: 'fat', align: 'center', label: 'Group', field: 'fat', sortable: true },
    { name: 'calcium', align: 'center', label: 'Start date', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'calcium', align: 'center', label: 'Expiry date', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'iron', align: 'center', label: '...', field: ''}
  ]
  
  const originalRows = [
    { id: 1, name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, image: 87, calcium: '14%', iron: '1%' },
    { id: 2, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, image: 129, calcium: '8%', iron: '1%' },
    { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, image: 337, calcium: '6%', iron: '7%' },
    { id: 4, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, image: 'https://lh3.googleusercontent.com/ogw/AF2bZyijnjqVGapR6vLPqDFnf-UH8kC0amBcyvCgAr0BLrvsxp8=s32-c-mo', calcium: '3%', iron: '8%' },
    { id: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, image: 327, calcium: '7%', iron: '16%' },
    { id: 6, name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, image: 50, calcium: '0%', iron: '0%' },
    { id: 7, name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, image: 38, calcium: '0%', iron: '2%' },
    { id: 8, name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, image: 562, calcium: '0%', iron: '45%' },
    { id: 9, name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, image: 326, calcium: '2%', iron: '22%' },
    { id: 10, name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, image: 54, calcium: '12%', iron: '6%' },
    { id: 11, name: 'Frozen Yogurt-1', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, image: 87, calcium: '14%', iron: '1%' },
    { id: 12, name: 'Ice cream sandwich-1', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, image: 129, calcium: '8%', iron: '1%' },
    { id: 13, name: 'Eclair-1', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, image: 337, calcium: '6%', iron: '7%' },
    { id: 14, name: 'Cupcake-1', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, image: 413, calcium: '3%', iron: '8%' },
    { id: 15, name: 'Gingerbread-1', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, image: 327, calcium: '7%', iron: '16%' },
    { id: 16, name: 'Jelly bean-1', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, image: 50, calcium: '0%', iron: '0%' },
    { id: 17, name: 'Lollipop-1', calories: 392, fat: 0.2, carbs: 98, protein: 0, image: 38, calcium: '0%', iron: '2%' },
    { id: 18, name: 'Honeycomb-1', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, image: 562, calcium: '0%', iron: '45%' },
    { id: 19, name: 'Donut-1', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, image: 'https://lh3.googleusercontent.com/ogw/AF2bZyijnjqVGapR6vLPqDFnf-UH8kC0amBcyvCgAr0BLrvsxp8=s32-c-mo', calcium: '2%', iron: '22%' },
    { id: 20, name: 'KitKat-1', calories: 518, fat: 26.0, carbs: 65, protein: 7, image: 54, calcium: '12%', iron: '6%' }
  ]
  
  export default {
    setup () {
      const tableRef = ref()
      const rows = ref([])
      const filter = ref('')
      const loading = ref(false)
      const pagination = ref({
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 3,
        rowsNumber: 10
      })
  
      // emulate ajax call
      // SELECT * FROM ... WHERE...LIMIT...
      function fetchFromServer (startRow, count, filter, sortBy, descending) {
        const data = filter
          ? originalRows.filter(row => row.name.includes(filter))
          : originalRows.slice()
  
        // handle sortBy
        if (sortBy) {
          const sortFn = sortBy === 'desc'
            ? (descending
                ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
                : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
              )
            : (descending
                ? (a, b) => (parseFloat(b[ sortBy ]) - parseFloat(a[ sortBy ]))
                : (a, b) => (parseFloat(a[ sortBy ]) - parseFloat(b[ sortBy ]))
              )
          data.sort(sortFn)
        }
  
        return data.slice(startRow, startRow + count)
      }
  
      // emulate 'SELECT count(*) FROM ...WHERE...'
      function getRowsNumberCount (filter) {
        if (!filter) {
          return originalRows.length
        }
        let count = 0
        originalRows.forEach(treat => {
          if (treat.name.includes(filter)) {
            ++count
          }
        })
        return count
      }
  
      function onRequest (props) {
        const { page, rowsPerPage, sortBy, descending } = props.pagination
        const filter = props.filter
  
        loading.value = true
  
        // emulate server
        setTimeout(() => {
          // update rowsCount with appropriate value
          pagination.value.rowsNumber = getRowsNumberCount(filter)
  
          // get all rows if "All" (0) is selected
          const fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage
  
          // calculate starting row of data
          const startRow = (page - 1) * rowsPerPage
  
          // fetch data from "server"
          const returnedData = fetchFromServer(startRow, fetchCount, filter, sortBy, descending)
  
          // clear out existing data and add new
          rows.value.splice(0, rows.value.length, ...returnedData)
  
          // don't forget to update local pagination object
          pagination.value.page = page
          pagination.value.rowsPerPage = rowsPerPage
          pagination.value.sortBy = sortBy
          pagination.value.descending = descending
  
          // ...and turn of loading indicator
          loading.value = false
        }, 1500)
      }

      onMounted(() => {
        // get initial data from server (1st page)
        tableRef.value.requestServerInteraction()
      })
  
      return {
        tableRef,
        filter,
        loading,
        pagination,
        columns,
        rows,
  
        onRequest
      }
    }
  }
  </script>