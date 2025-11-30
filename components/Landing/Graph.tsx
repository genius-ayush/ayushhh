import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from '@/hooks/use-theme';

export default function Graph() {
    const theme = useTheme();
    return (
        <div>
            <GitHubCalendar username="genius-ayush" colorScheme={theme} />
        </div>
    );
}
