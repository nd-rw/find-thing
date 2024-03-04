// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="LostItems" titleTo="lostItems" buttonLabel="New LostItem" buttonTo="newLostItem">
        <Route path="/lost-items/new" page={LostItemNewLostItemPage} name="newLostItem" />
        <Route path="/lost-items/{id:Int}/edit" page={LostItemEditLostItemPage} name="editLostItem" />
        <Route path="/lost-items/{id:Int}" page={LostItemLostItemPage} name="lostItem" />
        <Route path="/lost-items" page={LostItemLostItemsPage} name="lostItems" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
