import { Route, Routes, useParams } from "react-router-dom";
import { URLS } from "./URLS";
import { DefaultLayout } from "../shared/layouts/DefaultLayout";
import { AdmLayout } from "../shared/layouts/AdmLayout";

import { HomePage } from "../app/HomePage/screen";
import { Filmes } from "../app/MoviesPage/Filmes/screen";
import { MovieDescription } from "../app/MoviesPage/MovieDescription";

import { Faq } from "../shared/pages/FAQ";
import { PrivacyPolice } from "../shared/pages/PrivacyPolice";
import { TermsOfUse } from "../shared/pages/TermsOfUse";
import { PageNotFound } from "../app/PageNotFound/screen";

import { Login } from "../app/Login/screen";
import { Dashboard } from "../app/admin/Dashboard/screen";
import { Banner } from "../app/admin/Banner/screen";
import { Movies } from "../app/admin/Movies/screen";
import { SearchPage } from "../app/SearchPage/screen";

export function Router() {
  return (
    <Routes>

      <Route path="" element={<DefaultLayout />}>
        <Route path={URLS.INICIO} element={<HomePage />} />
        <Route path={URLS.FILMES} element={<Filmes />} />
        <Route path={URLS.FILME_ID} element={<MovieDescription />} />
        <Route path={URLS.PESQUISAR} element={<SearchPage />} />
        <Route path={URLS.FAQ} element={<Faq />} />
        <Route path={URLS.PRIVACY_POLICY} element={<PrivacyPolice />} />
        <Route path={URLS.TERMS_OF_USE} element={<TermsOfUse />} />
      </Route>

      <Route path={URLS.LOGIN} element={<Login />} />

      <Route path="/admin" element={<AdmLayout />}>
        <Route path={URLS.DASHBOARD} element={<Dashboard />} />
        <Route path={URLS.BANNER} element={<Banner />} />
        <Route path={URLS.MOVIES} element={<Movies />} />
      </Route>

      <Route path='*' element={<PageNotFound />} />

    </Routes>
  );
}
