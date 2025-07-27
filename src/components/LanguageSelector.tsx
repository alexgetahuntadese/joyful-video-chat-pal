
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Languages } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <Languages className="w-4 h-4" />
          <span>{language === 'en' ? 'English' : language === 'om' ? 'Afaan Oromoo' : 'አማርኛ'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border shadow-lg">
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center space-x-2">
            <span>🇺🇸</span>
            <span>English</span>
            {language === 'en' && <Badge variant="secondary">✓</Badge>}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('om')}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center space-x-2">
            <span>🇪🇹</span>
            <span>Afaan Oromoo</span>
            {language === 'om' && <Badge variant="secondary">✓</Badge>}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('am')}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center space-x-2">
            <span>🇪🇹</span>
            <span>አማርኛ</span>
            {language === 'am' && <Badge variant="secondary">✓</Badge>}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
