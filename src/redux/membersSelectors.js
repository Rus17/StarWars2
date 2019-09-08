export const getMembers = (state) => {
   return state.membersPage.members
}

export const getPageSize = (state) => {
   return state.membersPage.pageSize
}

export const getTotalUsersCount = (state) => {
   return state.membersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
   return state.membersPage.currentPage
}

export const getIsFetching = (state) => {
   return state.membersPage.isFetching
}

export const getInTheProcess = (state) => {
   return state.membersPage.inTheProcess
}

