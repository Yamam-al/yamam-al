// util/hardy-counter.ts
import { Octokit } from '@octokit/rest';

const owner = 'Yamam-al'; // Replace with your GitHub username
const repo = 'yamam-al'; // Replace with your repository name
const branch = 'hardy-counter-data';
const filePath = 'hardy-counter-data.json';

export async function resetHardyCounterData(token: string): Promise<void> {
  const octokit = new Octokit({ auth: token });

  try {
    // Get the current file content
    const data = await octokit.repos.getContent({
      owner,
      repo,
      path: filePath,
      ref: branch,
    });

    console.log(data.data);

    if (!('content' in data.data)) {
      throw new Error('File content is not available or this is not a file.');
    }

    // Decode and modify the file content

    const content = {
      'last-called-date': new Date().toISOString(),
    };
    const updatedContent = btoa(JSON.stringify(content, null, 2));

    // Commit the updated file
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message: 'Update last called date',
      content: updatedContent,
      sha: data.data.sha,
      branch,
    });
  } catch (error) {
    console.error('Error updating Hardy counter data:', error);
    throw error;
  }
}

export async function getLastCalledData(token: string): Promise<Date | null> {
  const octokit = new Octokit({ auth: token });

  try {
    // Get the current file content
    const response = await octokit.repos.getContent({
      owner,
      repo,
      path: filePath,
      ref: branch,
    });

    if (!('content' in response.data)) {
      throw new Error('File content is not available or this is not a file.');
    }

    // Decode and parse the file content
    const content = JSON.parse(atob(response.data.content));
    const date = new Date(content['last-called-date']);
    console.log(date);
    return date || null;
  } catch (error) {
    console.error('Error retrieving Hardy counter data:', error);
    throw error;
  }
}
