<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faA, faQuestion } from '@fortawesome/free-solid-svg-icons'
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Transition,
    } from "@rgossiaux/svelte-headlessui";
</script>

<section class="min-h-screen bg-gray-100 sm:px-12 xl:px-24 font-sans text-center flex flex-col gap-24 items-center">
    <div class="mt-20 flex flex-row justify-center items-center gap-2 lg:gap-5">
        <Fa icon={faQuestion} />
        <h1 class="text-xl sm:text-2xl font-semibold underline">Συχνές Ερωτήσεις (FAQ)</h1>
        <Fa icon={faQuestion} />
    </div>
    <div class="mb-20 bg-tertiary bg-opacity-40 p-5 rounded-xl w-1/2 flex flex-col gap-2 text-sm sm:text-base">
        <Disclosure>
            <DisclosureButton class="bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold">Τι είναι η συνδρομή "Emerald Member" και ποια είναι η διαφορά από τη συνδρομή "Diamond Member"?</DisclosureButton>

            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <DisclosurePanel class="font-medium rounded-lg mt-1">
                    Η συνδρομή "Emerald Member" προσφέρει πρόσβαση σε αποκλειστικά προγνωστικά που ετοιμάζονται αποκλειστικά από την ομάδα μας. Είναι ιδανική για όσους θέλουν να απολαμβάνουν τον αθλητισμό και να παίρνουν ευκαιρίες για επιτυχημένα στοιχήματα.
                    Από την άλλη, η συνδρομή "Diamond Member" παρέχει πρόσβαση σε όλα τα Emerald bets, καθώς και άλλα... ματς, που προσφέρουν μια εντελώς νέα διάσταση στον αθλητισμό και μοναδικές ευκαιρίες για επιτυχημένα στοιχήματα.
                </DisclosurePanel>

            </Transition>

        </Disclosure>

        <Disclosure>
            <DisclosureButton class="bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold">Πώς μπορώ να εγγραφώ στη συνδρομή "Emerald Member" ή "Diamond Member"?</DisclosureButton>

            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <DisclosurePanel class="font-medium rounded-lg mt-1">
                    Για να εγγραφείτε στη συνδρομή "Emerald Member" ή "Diamond Member," απλά επισκεφθείτε τον ιστότοπό μας και ακολουθήστε τις οδηγίες για την εγγραφή. Συμπληρώστε τα απαραίτητα στοιχεία και επιλέξτε το επίπεδο συνδρομής που σας ενδιαφέρει. Στη συνέχεια, ακολουθήστε τις απλές οδηγίες για την ολοκλήρωση της διαδικασίας εγγραφής.
                </DisclosurePanel>

            </Transition>

        </Disclosure>

        <Disclosure>
            <DisclosureButton class="bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold">Ποιες μέθοδοι πληρωμής διατίθενται για τις συνδρομές;</DisclosureButton>

            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <DisclosurePanel class="font-medium rounded-lg mt-1">
                    Διαθέτουμε διάφορες μέθοδους πληρωμής για τις συνδρομές μας, συμπεριλαμβανομένων πιστωτικών καρτών, χρεωστικών καρτών αλλά και Paypal. Μπορείτε να επιλέξετε τη μέθοδο που σας βολεύει περισσότερο κατά τη διάρκεια της εγγραφής.
                </DisclosurePanel>

            </Transition>

        </Disclosure>

        <Disclosure>
            <DisclosureButton class="bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold">Πώς λαμβάνω τις προγνώσεις και τις ενημερώσεις για νέα προγνωστικά;</DisclosureButton>

            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <DisclosurePanel class="font-medium rounded-lg mt-1">
                    Ως μέλος της συνδρομής μας, θα λαμβάνετε τις προγνώσεις και τις ενημερώσεις μέσω μηνυμάτων στο Discord server μας στο σχετικό κανάλι , ενώ παράλληλα θα ανεβαίνει story στο  Instagram μας  . Επίσης, μπορείτε να ελέγξετε τον ιστότοπό μας για να δείτε τις τελευταίες προβλέψεις και να ενημερώνεστε για τυχόν αλλαγές.
                </DisclosurePanel>

            </Transition>

        </Disclosure>

        <Disclosure>
            <DisclosureButton class="bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold">Υπάρχουν κάποια όρια στο πόσο μπορώ να στοιχηματίσω με βάση τις προβλέψεις σας;</DisclosureButton>

            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <DisclosurePanel class="font-medium rounded-lg mt-1">
                    Κατανοούμε την ανάγκη για υπεύθυνο στοίχημα. Σαν εταιρεία, δεν επιτρέπουμε τον υπερβολικό παίξιμο και σας συνιστούμε να τηρείτε τις κατευθυντήριες γραμμές για υπεύθυνο παιχνίδι. Κάντε πάντα τον έλεγχο των πόρων σας και παίξτε υπεύθυνα.
                </DisclosurePanel>

            </Transition>

        </Disclosure>

        <Disclosure>
            <DisclosureButton class="bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold">Πώς μπορώ να επικοινωνήσω μαζί σας για ερωτήσεις ή υποστήριξη;</DisclosureButton>

            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <DisclosurePanel class="font-medium rounded-lg mt-1">
                    Για οποιεσδήποτε ερωτήσεις ή υποστήριξη, μπορείτε να επικοινωνήσετε μαζί μας μέσω email ή να στείλετε μήνυμα στο Discord σε ενα απο τα Staff Members . Η ομάδα μας θα είναι ευτυχής να σας βοηθήσει και να απαντήσει σε όλες σας τις απορίες. Αυτές είναι μερικές από τις συχνές ερωτήσεις που λαμβάνουμε. Αν έχετε οποιεσδήποτε άλλες ερωτήσεις, μην διστάσετε να επικοινωνήσετε μαζί μας. Ευχαριστούμε που επιλέγετε εμάς για τις αθλητικές σας προβλέψεις και ανυπομονούμε να σας παρέχουμε την καλύτερη δυνατή εμπειρία στον αθλητισμό!
                </DisclosurePanel>

            </Transition>

        </Disclosure>
    </div>
</section>