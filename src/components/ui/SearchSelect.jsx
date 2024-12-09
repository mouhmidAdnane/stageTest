import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from './popover';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from './command'; 
import { Button } from './button'
import { ChevronsUpDown, CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils'; 

const SearchableSelect = ({
  items,
  value,
  onChange,
  placeholder = 'Select an option',
  searchPlaceholder = 'Search...',
  className,
}) => {

  return (
      <Popover className={className ? className : 'min-w-full'}>
        <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                'justify-between',
                !value && 'text-muted-foreground'
              )}
            >
              {value
                ? items.find((item) => item === value) || 'Unknown'
                : placeholder}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item}
                    value={item}
                    onSelect={() => onChange(item)}
                  >
                    <CheckIcon
                      className={cn(
                        'mr-2 h-4 w-4',
                        item === value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {item}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
  );
};

export default SearchableSelect;
