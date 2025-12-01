import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from '@/hooks/use-theme';

export default function Graph() {
    const theme = useTheme();
    return (
        <div className="flex justify-center w-full p-4 overflow-x-auto border-t mt-6 mb-6 border-b">
            <div className="min-w-fit">
                <GitHubCalendar username="genius-ayush" colorScheme={theme} />
            </div>
        </div>
    );
}
