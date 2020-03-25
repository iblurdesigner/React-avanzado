import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

<<<<<<< HEAD
export default ({ detailId }) => (
=======
export const Detail = ({ detailId }) => (
>>>>>>> hotfix2
  <Layout title={`Fotografía ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
