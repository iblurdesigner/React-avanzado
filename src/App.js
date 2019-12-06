import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'

import { ListOfPhotoCard } from './components/ListOfPhotoCard'

export const App = () => (
  <div>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
)
