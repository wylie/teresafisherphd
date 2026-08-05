import { importantPages, siteMetadata } from "../data/site";

const listItems = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");

const importantPageItems = importantPages
  // Add new public pages to src/data/site.ts so llms.txt, metadata, and AI-facing page lists stay in sync.
  .map((page) => `- [${page.title}](${page.path})`)
  .join("\n");

const locations = siteMetadata.officeLocations.map((location) => location.display);

export const GET = () =>
  new Response(
    `# ${siteMetadata.title}

${siteMetadata.llmsDescription}

## Practice Information

- Website: ${siteMetadata.url}
- Provider: ${siteMetadata.ownerName}
- Practice: ${siteMetadata.organizationName}
- Profession: ${siteMetadata.jobTitle}
- Office location: ${locations.join("; ")}

## Services Offered

${listItems(siteMetadata.services)}

## Intended Audience

${listItems(siteMetadata.intendedAudience)}

## Important Pages

${importantPageItems}

## Contact

- Contact page: /contact/
- Email: ${siteMetadata.email}
- Phone: ${siteMetadata.phoneDisplay}
- Website URL: ${siteMetadata.url}
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
