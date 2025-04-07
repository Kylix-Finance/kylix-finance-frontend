import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";

export const CustomMDX = (props: MDXRemoteProps) => (
  <div className=" text-light font-body prose max-w-prose mx-auto">
    <MDXRemote
      {...props}
      components={{
        ...(props.components || {}),
        img: (props) => (
          <img
            alt="MDXRemote"
            {...props}
            className="max-w-full h-auto rounded-lg shadow-lg sm:max-w-lg"
          />
        ),
        h1: (props) => (
          <h1
            {...props}
            className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-primary-400"
          >
            {props.children}
          </h1>
        ),
        h2: (props) => (
          <h2
            {...props}
            className="text-2xl sm:text-3xl font-heading font-bold mb-3 text-primary-300 scroll-mt-[8rem]"
          >
            <a className="hover:text-primary-200 " href={`#${props.id}`}>
              {props.children}
            </a>
          </h2>
        ),
        h3: (props) => (
          <h3
            {...props}
            className="text-xl sm:text-2xl font-heading font-bold mb-2 text-primary-200 scroll-mt-[8rem]"
          >
            <a className="hover:text-primary-100" href={`#${props.id}`}>
              {props.children}
            </a>
          </h3>
        ),
        h4: (props) => (
          <h4
            {...props}
            className="text-lg sm:text-xl font-heading font-bold mb-2 text-primary-100 scroll-mt-[8rem]"
          >
            <a className="hover:text-primary-50" href={`#${props.id}`}>
              {props.children}
            </a>
          </h4>
        ),
        h5: (props) => (
          <h5
            {...props}
            className="text-base sm:text-lg font-heading font-bold mb-1 text-primary-50  scroll-mt-[8rem]"
          >
            <a className="hover:text-primary-100" href={`#${props.id}`}>
              {props.children}
            </a>
          </h5>
        ),
        h6: (props) => (
          <h6
            {...props}
            className="text-sm sm:text-base font-heading font-bold mb-1 text-primary-100  scroll-mt-[8rem]"
          >
            <a className="hover:text-primary-200" href={`#${props.id}`}>
              {props.children}
            </a>
          </h6>
        ),
        ul: (props) => (
          <ul
            {...props}
            className="list-disc pl-6 space-y-2 text-primary-100 mb-4"
          />
        ),
        ol: (props) => (
          <ol
            {...props}
            className="list-decimal pl-6 space-y-2 text-primary-100 mb-4"
          />
        ),
        p: (props) => (
          <p {...props} className="text-primary-100 leading-relaxed mb-4" />
        ),
      }}
      options={{
        parseFrontmatter: true,
        mdxOptions: { rehypePlugins: [rehypeSlug] },
      }}
    />
  </div>
);
