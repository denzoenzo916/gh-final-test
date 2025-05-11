import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gh-final-test/blog',
    component: ComponentCreator('/gh-final-test/blog', '93f'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/archive',
    component: ComponentCreator('/gh-final-test/blog/archive', 'd89'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/authors',
    component: ComponentCreator('/gh-final-test/blog/authors', '811'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/gh-final-test/blog/authors/all-sebastien-lorber-articles', '6d2'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/authors/yangshun',
    component: ComponentCreator('/gh-final-test/blog/authors/yangshun', '081'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/first-blog-post',
    component: ComponentCreator('/gh-final-test/blog/first-blog-post', '7d6'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/long-blog-post',
    component: ComponentCreator('/gh-final-test/blog/long-blog-post', '475'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/mdx-blog-post',
    component: ComponentCreator('/gh-final-test/blog/mdx-blog-post', 'c41'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/tags',
    component: ComponentCreator('/gh-final-test/blog/tags', '8d4'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/tags/docusaurus',
    component: ComponentCreator('/gh-final-test/blog/tags/docusaurus', '7b5'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/tags/facebook',
    component: ComponentCreator('/gh-final-test/blog/tags/facebook', 'de4'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/tags/hello',
    component: ComponentCreator('/gh-final-test/blog/tags/hello', 'ed7'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/tags/hola',
    component: ComponentCreator('/gh-final-test/blog/tags/hola', 'd4b'),
    exact: true
  },
  {
    path: '/gh-final-test/blog/welcome',
    component: ComponentCreator('/gh-final-test/blog/welcome', '53b'),
    exact: true
  },
  {
    path: '/gh-final-test/markdown-page',
    component: ComponentCreator('/gh-final-test/markdown-page', 'e55'),
    exact: true
  },
  {
    path: '/gh-final-test/docs',
    component: ComponentCreator('/gh-final-test/docs', '677'),
    routes: [
      {
        path: '/gh-final-test/docs',
        component: ComponentCreator('/gh-final-test/docs', '56f'),
        routes: [
          {
            path: '/gh-final-test/docs',
            component: ComponentCreator('/gh-final-test/docs', '5cc'),
            routes: [
              {
                path: '/gh-final-test/docs/category/tutorial---basics',
                component: ComponentCreator('/gh-final-test/docs/category/tutorial---basics', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/category/tutorial---extras',
                component: ComponentCreator('/gh-final-test/docs/category/tutorial---extras', '35b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/Denny-test/testing',
                component: ComponentCreator('/gh-final-test/docs/Denny-test/testing', '8e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/intro',
                component: ComponentCreator('/gh-final-test/docs/intro', '67a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/gh-final-test/docs/tutorial-basics/congratulations', 'fd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/gh-final-test/docs/tutorial-basics/create-a-blog-post', '0ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/gh-final-test/docs/tutorial-basics/create-a-document', '3d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/gh-final-test/docs/tutorial-basics/create-a-page', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/gh-final-test/docs/tutorial-basics/deploy-your-site', '3ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/gh-final-test/docs/tutorial-basics/markdown-features', 'e19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/gh-final-test/docs/tutorial-extras/manage-docs-versions', '9dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gh-final-test/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/gh-final-test/docs/tutorial-extras/translate-your-site', 'ba2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/gh-final-test/',
    component: ComponentCreator('/gh-final-test/', '249'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
